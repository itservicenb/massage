import classNames from 'classnames/bind';
import styles from './Slide.module.scss';

import images1 from '~/assets/images/slide/1.jpg';
const cx = classNames.bind(styles);

function Slide() {
    return (
        <div className={cx('swiper-container')}>
            <div className={cx('swiper-wrapper')}>
                {/* <!-- Slides --> */}
                <div className={cx('swiper-slide')}>
                    <img src={images1} />
                </div>
                <div className={cx('swiper-slide')}>Slide 2</div>
                <div className={cx('swiper-slide')}>Slide 3</div>
                ...
            </div>
            {/* <!-- Nếu cần pagination --> */}
            <div className={cx('swiper-pagination')}></div>

            {/* <!-- Nếu cần navigation --> */}
            <div className={cx('swiper-button-prev')}></div>
            <div className={cx('swiper-button-next')}></div>

            {/* <!-- Nếu cần scrollbar --> */}
            <div className={cx('swiper-scrollbar')}></div>
        </div>
    );
}

export default Slide;
