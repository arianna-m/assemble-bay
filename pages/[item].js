import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { item } = router.query
    let data = useSWR("/api/"+item, fetcher).data;
    useEffect(() => {
      console.log(data);
    });

  return <p>Post: {item}</p>
}

export default Post