const PostDetailPage = (props: { params: { postId: string } }) => {
  return <div>포스트 상세 페이지 {props.params.postId}</div>;
};

export default PostDetailPage;
