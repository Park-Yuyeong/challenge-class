"use client";

import Page from "@/components/Page";
import { supabase } from "@/contexts/supabase.context";
import { Tables } from "@/types/supabase";
import Image from "next/image";
import { useEffect, useState } from "react";

type Deal = Tables<"deals">;

const MyDealsPage = () => {
  const [myDeals, setMyDeals] = useState<Deal[]>([]);

  useEffect(() => {
    (async () => {
      const user = await supabase.auth.getUser().then((res) => res.data.user);
      if (!user) return;

      const { data } = await supabase
        .from("deals")
        .select("*")
        .eq("sellerId", user.id);
      if (!data) return;

      setMyDeals(data);
    })();
  }, []);

  return (
    <Page title="내 판매글" width="sm">
      {myDeals.map((deal) => (
        <div key={deal.id}>
          <div className="relative aspect-square">
            <Image
              alt={deal.content}
              src={deal.imageURL}
              fill
              className="object-cover"
            />
          </div>
          <p>{deal.content}</p>
        </div>
      ))}
    </Page>
  );
};

export default MyDealsPage;
