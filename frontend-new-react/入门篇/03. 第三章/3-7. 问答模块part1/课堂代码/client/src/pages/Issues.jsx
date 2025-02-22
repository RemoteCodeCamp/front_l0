import { useState, useEffect } from 'react';

import PageHeader from "../components/PageHeader";
import IssueItem from "../components/IssueItem";
import { getIssueByPage } from "../api/issue";
import styles from "../css/Issue.module.css";

function Issues(props) {

    // 用于存储获取到的状态列表
    const [issueInfo, setIssueInfo] = useState([]);
    // 分页信息
    const [pageInfo, setPageInfo] = useState({
        current: 1, // 当前是第一页
        pageSize: 15, // 每一页显示 15 条数据
        total: 0, // 数据的总条数
    })

    useEffect(() => {
        async function fetchData() {
            // {currentPage: 1, eachPage: 15, count: 21, totalPage: 2, data: Array(15)}
            const { data } = await getIssueByPage({
                current: pageInfo.current,
                pageSize: pageInfo.pageSize,
                issueStatus: true
            });
            setIssueInfo(data.data);
            setPageInfo({
                current: data.currentPage,
                pageSize: data.eachPage,
                total: data.count
            });
        }
        fetchData();
    }, [pageInfo.current, pageInfo.pageSize]);

    let issueList = [];
    for (let i = 0; i < issueInfo.length; i++) {
        issueList.push(<IssueItem key={i} issueInfo={issueInfo[i]} />);
    }

    return (
        <div className={styles.container}>
            {/* 上面的头部 */}
            <PageHeader title="问答列表" />
            {/* 下面的列表内容区域 */}
            <div className={styles.issueContainer}>
                {/* 左边区域 */}
                <div className={styles.leftSide}>
                    {issueList}
                </div>
                {/* 右边区域 */}
                <div className={styles.rightSide}></div>
            </div>
        </div>
    );
}

export default Issues;
