import { AppDownloader } from "@/presentation/components";
import { Text } from "@/presentation/layouts";
import React from "react";

function page() {
  return (
    <div>
      <p>this is blog page</p>

      <div className="flex flex-wrap bg-slate-900">
        <AppDownloader
          osStoreIcon="appStore"
          size={"lg"}
          iconColor="#d9dbda"
          variant={"outlinedSecondary"}
        />
        <AppDownloader
          osStoreIcon="playStore"
          size={"lg"}
          variant={"filledPrimary"}
        />

        <AppDownloader
          osStoreIcon="playStore"
          size={"lg"}
          variant={"filledSecondary"}
        />

        <AppDownloader
          osStoreIcon="playStore"
          size={"lg"}
          variant={"outlinedPrimary"}
        />
      </div>

      <div className="my-1 bg-info  h-[300px] ">
        <Text color="neutral">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          illum repellat incidunt excepturi ipsum! Repudiandae assumenda
          cupiditate illo, nulla neque est vitae iure officia magnam nesciunt
          facere, harum totam eligendi?
        </Text>
      </div>
    </div>
  );
}

export default page;
