"use client";
import useWindow from "@/hooks/use-window";

export default function SiteFooter() {
  const { isDesktop } = useWindow();

  return (
    <div className="md:container md:max-w-6xl px-4">
      <div className="fixed bottom-8 select-none flex justify-between md:max-w-6xl w-full items-center  0 pr-8">
        {isDesktop ? (
            <div className="flex-1 text-left text-sm leading-loose text-muted-foreground">
              {'</owl:Class>'}
            </div>
          ) : (
            <div></div>
          )
        }  
      </div>
    </div>
  );
}
