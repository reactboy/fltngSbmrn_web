import React, { MouseEvent } from "react";
import { Card, Typography, Row, Col, Affix, Button, Tag } from "antd";
import { InputResource, inputResourceList } from "./list";

const { Title, Paragraph } = Typography;

const ResourceInputItem = (props: InputResource) => {
    const { name, url, description, language, tags } = props;
    const onClickCard = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (!url) return;
        window.open(url, "_blunk");
    };
    const tagParts = tags
        ? tags.map(({ name, color }, i) => (
              <Tag key={i} color={color}>
                  {name}
              </Tag>
          ))
        : null;
    return (
        <li className="input-resourse-item">
            <Card onClick={onClickCard} bordered={false}>
                <Row justify="space-between">
                    <Col>
                        <Title level={4}>{name}</Title>
                    </Col>
                    <Col>
                        <Tag>{language}</Tag>
                    </Col>
                </Row>
                {description && <Paragraph>{description}</Paragraph>}
                {tagParts}
            </Card>
        </li>
    );
};

const ResourceInputList = () => {
    return (
        <ul className="input-resourse-list">
            {inputResourceList.map((resource, i) => (
                <ResourceInputItem {...resource} key={i} />
            ))}
        </ul>
    );
};

export const ResourceInput = () => {
    return (
        <div className="input-section">
            <Row>
                <Col span={12}>
                    <Affix offsetTop={80}>
                        <div className="input-description-area">
                            <Row>
                                <Col>
                                    <Title level={2}>インプット</Title>
                                    <Paragraph>
                                        インプットとは”知らなかった”の状態から"知っている"の状態にする作業です。
                                    </Paragraph>
                                    <Title level={3}>インプットの手段</Title>
                                    <Paragraph>
                                        インプットの手段としてはブログ・メディアの記事、書籍、動画、音声など色々ありますよね。
                                        <br />
                                        これらをRSSリーダーなどを活用して自分専用のリソース集のようなものを作ると便利だと思います。
                                    </Paragraph>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button disabled>
                                        Submarine
                                        stacksで自分だけのリソース集を作る
                                    </Button>
                                    <Paragraph>※準備中</Paragraph>
                                </Col>
                            </Row>
                        </div>
                    </Affix>
                </Col>
                <Col span={12}>
                    <ResourceInputList />
                </Col>
            </Row>
        </div>
    );
};
