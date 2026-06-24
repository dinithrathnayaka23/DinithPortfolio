"use client";

import dynamic from "next/dynamic";

const Scene = dynamic(() => import("./profile-scene-canvas"), {
  ssr: false,
  loading: () => (
    <div
      role="status"
      className="flex h-full min-h-[320px] w-full items-center justify-center"
    >
      <svg
        aria-hidden="true"
        className="h-8 w-8 animate-spin fill-blue-500 text-neutral-700"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading profile scene...</span>
    </div>
  ),
});

export default function ProfileScene() {
  return (
    <div
      data-profile-scene
      className="relative mx-auto aspect-square w-[min(430px,84vw)] rounded-[2rem] bg-[conic-gradient(from_180deg_at_50%_50%,#3273ff,#32a7ff,#f8c24e,#bfa5ff,#3273ff)] p-[2px] shadow-[0_0_38px_rgba(50,115,255,0.2)] before:absolute before:-inset-3 before:-z-10 before:rounded-[2.4rem] before:bg-[conic-gradient(from_90deg,#3273ff2e,#32a7ff2e,#f8c24e24,#bfa5ff2e,#3273ff2e)] before:blur-xl"
    >
      <div className="relative h-full w-full overflow-hidden rounded-[calc(2rem-2px)] border border-white/10 bg-black/70">
        <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(50,115,255,0.14),transparent_54%)]" />
        <Scene />
      </div>
    </div>
  );
}
