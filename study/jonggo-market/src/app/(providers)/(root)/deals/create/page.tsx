"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Page from "@/components/Page";
import { supabase } from "@/contexts/supabase.context";
import { nanoid } from "nanoid";
import { useState } from "react";

const CreateDealPage = () => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleClickCreate = async () => {
    if (!image) return;

    const extension = image.name.split(".").slice(-1)[0];
    const filename = nanoid() + "." + extension;

    const response = await supabase.storage
      .from("deals")
      .upload(`/${filename}`, image);
    if (!response.data) return;

    const imageURL =
      "https://xnukoluzsvucwpnmmcdw.supabase.co/storage/v1/object/public/" +
      response.data?.fullPath;

    await supabase.from("deals").insert({ content, imageURL });

    // 모든 판매글 확인 - seller 정보도 같이 조회
    // const { data } = await supabase
    //   .from("deals")
    //   .select("*, seller: sellerId (*)");
  };

  return (
    <Page title="판매글 작성하기">
      <Input
        label="판매글 내용"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Input
        label="대표 이미지"
        type="file"
        onChange={(e) => setImage(e.target.files?.[0] || null)}
      />
      <Button onClick={handleClickCreate}>작성하기</Button>
    </Page>
  );
};

export default CreateDealPage;
