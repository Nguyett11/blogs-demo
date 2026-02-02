import ViewDetailClient from "./ViewDetailClient";

const ViewDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  return <ViewDetailClient id={id} />;
};

export default ViewDetailPage;
