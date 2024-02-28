import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Roadmap.css';

const contentStyle = {
    background: 'transparent',
    color: '#fff'
};

const iconStyle = {
    background: 'linear-gradient(141deg, rgba(20, 115, 204, 1) 0%, rgba(25, 87, 144, 1) 100%)',
    color: '#fff'
};

const contentArrowStyle = { borderRight: '7px solid  var(--green-30' };

const Roadmap = () => {
    return (
        <>
            <section className='roadmapSection'>
                <h1 className="heading">Roadmap</h1>

                <VerticalTimeline layout="2-columns">
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work Dot1"
                        contentStyle={contentStyle}
                        contentArrowStyle={contentArrowStyle}
                        iconStyle={iconStyle}
                        position="right"
                    >
                        <img src="/roadmap-1.svg" alt="" style={{ height: '28rem', top: "90px" }} className="leftImage" />
                        <div className='Q1'>
                            <h1>Quarter 1</h1>
                            <h3>BitBhoomi Beta Launch</h3>
                            <p>The beta version of BitBhoomi will be released, allowing users to test and provide feedback on the platform before its official launch.</p>
                            <h3>IDO Token Launch (Community Sale)</h3>
                            <p>The projects token will be offered for sale to the community through a decentralized exchange. This will allow community members to participate in the projects growth.</p>
                            <h3>Token Listing on Decentralized Exchange</h3>
                            <p>After the IDO, the projects token will be listed on a decentralized exchange, making it available for trading among users.</p>
                        </div>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={contentStyle}
                        contentArrowStyle={contentArrowStyle}
                        iconStyle={iconStyle}
                        position="left"
                    >
                        <img src="/roadmap-2.svg" alt="" className="rightImage" />
                        <div className='Q2'>
                            <h1>Quarter 2</h1>
                            <h3>BitBhoomi Mainnet Launch</h3>
                            <p>This is the official launch of the BitBhoomi platform on the mainnet, meaning it will be fully operational and accessible to users.</p>
                            <h3>Token Listing on Centralized Exchanges</h3>
                            <p>The projects token will be listed on centralized exchanges, providing more opportunities for users to trade and access the token.</p>
                            <h3>Onboarding of Projects</h3>
                            <p>Partnerships and Collaborations</p>
                        </div>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={contentStyle}
                        contentArrowStyle={contentArrowStyle}
                        iconStyle={iconStyle}
                        position="right"
                    >
                        <img src="/roadmap-3.svg" alt="" style={{ height: '33rem' }} className="leftImage" />
                        <h1>Quarter 3</h1>
                        <h3>Global Expansion</h3>
                        <h3>NFT Trading Marketplace</h3>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={contentStyle}
                        contentArrowStyle={contentArrowStyle}
                        iconStyle={iconStyle}
                        position="right"
                    >
                        <h1>Quarter 4</h1>
                        <h3>Platform Scaling</h3>
                        <h3>BitBhoomiAI: Carbon Credits prediction Tool Launch</h3>
                        <h3>Governance Model</h3>
                    </VerticalTimelineElement>


                    <VerticalTimelineElement
                        className='lastDot'
                        iconStyle={iconStyle}
                    />
                </VerticalTimeline>
            </section >
        </>
    )
}

export default Roadmap;