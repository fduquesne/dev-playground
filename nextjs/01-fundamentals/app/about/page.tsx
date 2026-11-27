import MainContainer from "@/app/_components/layout/main-container";

export default function AboutPage() {
  return (
    <MainContainer>
      <div className="space-y-2">
        <h1>About</h1>
        <p className="text-neutral-400">
          A tiny description of the application.
        </p>
      </div>
    </MainContainer>
  );
}
