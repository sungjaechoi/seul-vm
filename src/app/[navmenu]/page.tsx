import Home from "../home/_component/Home";

type Props = {
  params: {
    navmenu: string;
  };
};

export default function Page({ params }: Props) {
  console.log("params", params);
  return (
    <>
      <Home />
      <div>{`${params.navmenu}`}</div>
    </>
  );
}
