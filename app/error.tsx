"use client";

interface Props {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error, reset }: Props) {
  console.log(error);

  return (
    <>
      <div>An unexpected error has occurred.</div>
      <div className="btn" onClick={() => reset()}>Retry</div>
    </>
  );
}
