"use client";

import Link from "next/link";
import Card from "react-bootstrap/Card";
import useSWR, { Fetcher } from "swr";

const fetcher: Fetcher<IBlog, string> = (url: string) =>
    fetch(url).then((res) => res.json());

const ViewDetailClient = ({ id }: { id: string }) => {
    const { data, error, isLoading } = useSWR(
        `http://localhost:8000/blogs/${id}`,
        fetcher
    );

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading blog</div>;

    return (
        <div>
            <Link href="/blogs">Go Back</Link>

            <Card className="text-center">
                <Card.Header>{data?.title}</Card.Header>
                <Card.Body>
                    <Card.Text>{data?.content}</Card.Text>
                </Card.Body>
                <Card.Footer>{data?.author}</Card.Footer>
            </Card>
        </div>
    );
};

export default ViewDetailClient;
