import { useState, useRef } from "react";
import { getPagesArray } from "../components/utils/pages";
import { usePosts } from "../components/hooks/usePosts";
import { useFetching } from "../components/hooks/useFetching";
import { getPageCount } from "../components/utils/pages";
import { useEffect } from "react";
import { Button } from "../components/UI/Button/Button";
import { Modal } from "../components/UI/Modal/Modal";
import { Loader } from "../components/UI/Loader/Loader";
import { Pagination } from "../components/UI/Pagination/Pagination";
import { PostForm } from "../components/PostForm";
import { PostFilter } from "../components/PostFilter";
import { PostList } from "../components/PostList";
import PostService from "../API/PostService";
import { useObserver } from "../components/hooks/useObserver";
import { Select } from "../components/UI/Select/Select";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const lastElement = useRef();

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts((prevPosts) => [...prevPosts, ...response.data]);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  let pagesArray = getPagesArray(totalPages);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page+1);
  })


  useEffect(() => {
    fetchPosts();
  }, [page, limit]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  // Получаем пост из дочернего компонента
  const removePost = (postToDelete) => {
    setPosts(posts.filter((post) => post.id !== postToDelete.id));
  };

  return (
    <div className="components">
      <Button onClick={() => setModal(!modal)} style={{ marginTop: "30px" }}>
        Создать пост
      </Button>
      <Modal modal={modal} setModal={setModal}>
        <PostForm create={createPost} />
      </Modal>

      <hr style={{ margin: "15px" }} />
      <PostFilter filter={filter} setFilter={setFilter} limit={limit} setLimit={(value) => {
        setPage(1);
        setPosts([]);
        setLimit(value);
      }} />
      {postError && <h1>Произошла ошибка</h1>}
      {isPostsLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader />
        </div>
      )}
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title={"Посты Frontend"}
      />
      <div ref={lastElement}></div>
      {/* <Pagination totalPages={totalPages} page={page} setPage={setPage} /> */}
    </div>
  );
};
