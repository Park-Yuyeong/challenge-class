export type SDeal<IsDetail extends boolean = false> = {
  id: number;
  title: string;
  imgUrl: string;
  price: number;
  location: string;
  likesCount: number;
} & (IsDetail extends true
  ? {
      seller: {
        avatarImgUrl: string;
        email: string;
      };

      createdAt: number;
      content: string;
      viewsCount: number;
    }
  : {});
