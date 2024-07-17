import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Col, Row, Statistic } from 'antd';
import CountUp from 'react-countup';

const formatter = (value) => <CountUp end={value} separator="," />;

export const Reyting = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div>
            {/* <Row gutter={16}>
                <Col span={12}>
                    <Statistic title="Active Users" value={112893} formatter={formatter} />
                </Col>
                <Col span={12}>
                    <Statistic title="Account Balance (CNY)" value={112893} precision={2} formatter={formatter} />
                </Col>
            </Row> */}

            <div className="container px-5 py-24 mx-auto" data-aos="fade-up" data-aos-duration="1000">
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 sm:w-1/4 w-1/2">
                        <h2 className="title-font font-medium sm:text-4xl text-3xl text-[#050A30]">
                            <Col span={12}>
                                <Statistic title="O'quvchilar" value={2770} formatter={formatter} />
                            </Col>
                        </h2>
                    </div>
                    <div className="p-4 sm:w-1/4 w-1/2">
                        <h2 className="title-font font-medium sm:text-4xl text-3xl text-[#050A30]">
                            <Col span={12}>
                                <Statistic title="Ustozlar" value={50} precision={2} formatter={formatter} />
                            </Col>
                        </h2>
                    </div>
                    <div className="p-4 sm:w-1/4 w-1/2">
                        <h2 className="title-font font-medium sm:text-4xl text-3xl text-[#050A30]">
                        <Col span={12}>
                                <Statistic title="Fanlar" value={10} precision={2} formatter={formatter} />
                            </Col> 
                        </h2>
                    </div>
                    <div className="p-4 sm:w-1/4 w-1/2">
                        <h2 className="title-font font-medium sm:text-4xl text-3xl text-[#050A30]">
                        <Col span={12}>
                                <Statistic title="Filial" value={3} precision={2} formatter={formatter} />
                            </Col>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
