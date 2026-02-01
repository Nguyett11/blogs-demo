"use client";

import AppTable from "@/components/app.table";
import useSWR from "swr";

const BlogsPage = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );

  // console.log("res: ", data);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("http://localhost:8000/blogs");
  //     const data = await res.json();
  //     console.log("res: ", data);
  //   }
  //   fetchData();
  // }, [])

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container">
      <div className="mt-3">
        <AppTable
          blogs={data?.sort((a: IBlog, b: IBlog) => b.id - a.id) ?? []}
        />
      </div>
    </div>
  );
};

export default BlogsPage;
