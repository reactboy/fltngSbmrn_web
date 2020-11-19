import React from "react";
import { HeartFilled, PlusCircleFilled } from "@ant-design/icons";

interface FeedListItemProps {
    title: string;
    isBookmarked: boolean;
}
export const FeedListItem: React.FC<FeedListItemProps> = (props) => {
    const { title, isBookmarked } = props;
    return (
        <li className="feed-list-item">
            <div className="feed-list-item__title">
                <span>{title}</span>
            </div>
            <div className="feed-list-item__bookmark-icon">
                <HeartFilled
                    style={{ color: isBookmarked ? "#cabae2" : "#eaecef" }}
                />
            </div>
        </li>
    );
};

const stubList: FeedListItemProps[] = [
    { title: "titletitletitletitle", isBookmarked: true },
    { title: "titletitletitelttielte", isBookmarked: true },
    { title: "titletitletitelttielte", isBookmarked: false },
    { title: "titletitletitelttielte", isBookmarked: true },
    { title: "titletitletitelttielte", isBookmarked: true },
];
const stubListMore: FeedListItemProps[] = [
    { title: "titletitletitletitle", isBookmarked: true },
    { title: "titletitletitelttielte", isBookmarked: true },
    { title: "titletitletitelttielte", isBookmarked: false },
    { title: "titletitletitelttielte", isBookmarked: true },
    { title: "titletitletitelttielte", isBookmarked: true },
    { title: "titletitletitletitle", isBookmarked: true },
    { title: "titletitletitelttielte", isBookmarked: true },
    { title: "titletitletitelttielte", isBookmarked: false },
    { title: "titletitletitelttielte", isBookmarked: true },
    { title: "titletitletitelttielte", isBookmarked: true },
];

interface FeedListProps {
    name: string;
    list: FeedListItemProps[];
}
export const FeedList: React.FC<FeedListProps> = (props) => {
    const { name, list } = props;
    return (
        <div className="feed-list">
            <div className="feed-list__name">{name}</div>
            <ul className="feed-list__list">
                {list.map(({ title, isBookmarked }, i) => (
                    <FeedListItem title={title} isBookmarked={isBookmarked} />
                ))}
            </ul>
            <div className="feed-list__more">
                <span>MORE</span>
            </div>
        </div>
    );
};

export const FeedPanel = () => {
    return (
        <div className="feed-panel">
            <div className="feed-panel__list-section">
                <FeedList name="Reactboyyy" list={stubList} />
                <FeedList name="VueGirlll" list={stubList} />
                <FeedList name="CousinSvelteeee" list={stubListMore} />
                {/* <FeedList name="DaddyAngularrrr" list={stubList} />
                <FeedList name="CousinSvelteeee" list={stubListMore} />
                <FeedList name="CousinSvelteeee" list={stubListMore} />
                <FeedList name="CousinSvelteeee" list={stubListMore} /> */}
                <div className="feed-panel__add-button">
                    <div className="feed-panel__add-button-icon">
                        <PlusCircleFilled />
                    </div>
                </div>
            </div>
        </div>
    );
};
