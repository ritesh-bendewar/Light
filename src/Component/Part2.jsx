import * as React from "react";
import cylinder from './cylinder.jpg'
export default function MyComponent2() {
  return (
    <div className="pt-5 pr-1.5 bg-indigo-50 backdrop-blur-[7px] pb-11 pl-11 w-full max-md:pl-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto font-medium leading-8 max-md:mt-10 max-md:max-w-full">
            <div className="justify-center self-start px-3.5 text-sm tracking-tight text-black rounded-xl border border-solid border-neutral-800 border-opacity-10">
              Version 2.0 is here
            </div>
             
            <div className="mt-7 text-6xl font-bold tracking-tighter bg-clip-text leading-[90px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
              Pathway to productivity
            </div>
            <div className="mt-7 text-2xl tracking-tighter text-slate-900 max-md:max-w-full">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </div>
            <div className="flex gap-4 self-start mt-7 text-base tracking-tight">
              <div className="justify-center self-start px-4 py-2.5 text-white bg-black rounded-xl">
                Get for free
              </div>
              <div className="flex gap-1 justify-center py-2.5 text-black rounded-xl">
                <div>Learn more</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a11d088866ee4efcdd55801e4a908f6a82aeb7e014b66a7f6e7c34f086c5a3b9?apiKey=9e27cf7fce2f418b8eac61c62a170377&"
                  className="shrink-0 w-5 aspect-square"
                />
                
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7d834ea12224045857f4a2eeab6eaf1e2143f31d5681179c5d9c7916cc605adb?apiKey=9e27cf7fce2f418b8eac61c62a170377&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d834ea12224045857f4a2eeab6eaf1e2143f31d5681179c5d9c7916cc605adb?apiKey=9e27cf7fce2f418b8eac61c62a170377&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d834ea12224045857f4a2eeab6eaf1e2143f31d5681179c5d9c7916cc605adb?apiKey=9e27cf7fce2f418b8eac61c62a170377&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d834ea12224045857f4a2eeab6eaf1e2143f31d5681179c5d9c7916cc605adb?apiKey=9e27cf7fce2f418b8eac61c62a170377&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d834ea12224045857f4a2eeab6eaf1e2143f31d5681179c5d9c7916cc605adb?apiKey=9e27cf7fce2f418b8eac61c62a170377&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d834ea12224045857f4a2eeab6eaf1e2143f31d5681179c5d9c7916cc605adb?apiKey=9e27cf7fce2f418b8eac61c62a170377&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d834ea12224045857f4a2eeab6eaf1e2143f31d5681179c5d9c7916cc605adb?apiKey=9e27cf7fce2f418b8eac61c62a170377&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d834ea12224045857f4a2eeab6eaf1e2143f31d5681179c5d9c7916cc605adb?apiKey=9e27cf7fce2f418b8eac61c62a170377&"
            className="w-full aspect-square max-md:mt-5 max-md:max-w-full"
          />


        </div>
      </div>
    </div>
  );
}

