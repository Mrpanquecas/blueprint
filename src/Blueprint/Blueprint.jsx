import React from 'react'
import { Popup } from 'semantic-ui-react'
// Import Swiper React components
import SwiperCore, {Navigation, Pagination} from "swiper"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Icon } from 'semantic-ui-react'

// Import Swiper styles
import 'swiper/swiper.scss';

SwiperCore.use(Navigation, Pagination)

function Blueprint ({src, areas, onClick}) {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
            }}
        >
            <div
                id="blueprint"
                style={{
                    backgroundImage: `url(${src})`,
                    width: 500,
                    height: 500,
                    position: 'relative'
                }}
                onClick={onClick}
            >
                {areas.map(area => (
                    <Popup
                        content={
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={3}
                            >
                                {area.images?.map(img => (
                                    <SwiperSlide>
                                        <img style={{width: 150, height: 'auto'}} src={img} />
                                    </SwiperSlide> 
                                ))}
                            </Swiper>
                        }
                        on='click'
                        position='top center'
                        trigger={
                            <div
                                style={{
                                    position: 'absolute',
                                    marginLeft: area.coords.x-12,
                                    marginTop: area.coords.y-12,
                                }}
                            >
                                <Icon
                                    circular
                                    inverted
                                    name='camera'
                                    key={area.name}

                                />
                            </div>
                        }
                        inverted={true}
                    />
                ))}
             </div>
        </div>
    )
}

export default Blueprint