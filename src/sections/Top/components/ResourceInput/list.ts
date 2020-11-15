type resourceType = "book" | "media" | "video" | "podcast" | "service";

export interface Tag {
    name: string;
    color: string;
}

export interface InputResource {
    name: string | null;
    url: string | null;
    language: "JPN" | "ENG" | null;
    type: resourceType | null;
    tags: Tag[] | null;
    description: string | null;
}

const TAG_COLOR = {
    RED: "red",
};

const TAGS = {
    YOUTUBE: {
        name: "youtube",
        color: TAG_COLOR.RED,
    },
    NEWS_LETTER: {
        name: "ニュースレター",
        color: "blue",
    },
    SETVICE: {
        name: "サービス",
        color: "orange",
    },
    TECH_BLOG: {
        name: "テックブログ",
        color: "geekblue",
    },
    MEDIA: {
        name: "メディア",
        color: "orange",
    },
};

export const inputResourceList: InputResource[] = [
    {
        name: "JSer.info",
        url: "https://jser.info/",
        language: "JPN",
        type: "media",
        tags: [TAGS.TECH_BLOG],
        description: "JavaScriptの最新情報を紹介する週刊ブログ",
    },
    {
        name: "Frontend Weekly Tokyo",
        url: "https://frontendweekly.tokyo/",
        language: "JPN",
        type: "media",
        tags: [TAGS.NEWS_LETTER],
        description:
            "国内・海外のフロントエンド関連情報を厳選し毎週配信しているブログ",
    },
    {
        name: "Hatena Developer Blog",
        url: "https://developer.hatenastaff.com/",
        language: "JPN",
        type: "media",
        tags: [TAGS.TECH_BLOG],
        description: "はてなの開発者ブログ",
    },
    {
        name: "OkCupid",
        url: "https://tech.okcupid.com/",
        language: "ENG",
        type: "media",
        tags: [TAGS.TECH_BLOG],
        description: "オンラインマッチングサービス、OkCupidの開発者ブログ",
    },
    {
        name: "microCMS",
        url: "https://microcms.io/blog/",
        language: "JPN",
        type: "media",
        tags: [TAGS.TECH_BLOG],
        description: "ヘッドレスCMSを提供するmicroCMSの開発者ブログ",
    },
    {
        name: "サイボウズ",
        url: "https://tech.cybozu.io/",
        language: "JPN",
        type: "media",
        tags: [TAGS.TECH_BLOG],
        description: "サイボウズの開発者ブログ",
    },
    {
        name: "Web Scratch",
        url: "https://efcl.info/",
        language: "JPN",
        type: "media",
        tags: [TAGS.TECH_BLOG],
        description: "ブラウザ/JavaScript等についてのブログ",
    },
    {
        name: "CodeZine",
        url: "https://codezine.jp/",
        language: "JPN",
        type: "media",
        tags: [TAGS.MEDIA],
        description: "開発者向けのWebメディア",
    },
    {
        name: "Product hunt",
        url: "https://www.producthunt.com/",
        language: "JPN",
        type: "media",
        tags: [TAGS.SETVICE],
        description:
            "プロダクション、個人制作とレベルを問わずに新着のサービス、プロダクトを紹介しているサービス",
    },
    {
        name: "DevEd",
        url: "https://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q",
        language: "ENG",
        type: "video",
        tags: [TAGS.YOUTUBE],
        description: "プログラミングのチュートリアル動画を公開している",
    },
    {
        name: "CleverProgrammer",
        url: "https://www.youtube.com/c/CleverProgrammer",
        language: "ENG",
        type: "video",
        tags: [TAGS.YOUTUBE],
        description:
            "facebookやyoutube、Airbnb、Amazonなど既にあるサービスをスクラッチで作るような動画を公開している",
    },
    {
        name: "Traversy Media",
        url: "https://www.youtube.com/user/TechGuyWeb",
        language: "ENG",
        type: "video",
        tags: [TAGS.YOUTUBE],
        description: "幅広くプログラミングのチュートリアル動画を公開している",
    },
    {
        name: "プロゲート",
        url: "https://www.youtube.com/user/TechGuyWeb",
        language: "JPN",
        type: "service",
        tags: [TAGS.SETVICE],
        description: "手を動かしながら勉強することができるサイト",
    },
];
