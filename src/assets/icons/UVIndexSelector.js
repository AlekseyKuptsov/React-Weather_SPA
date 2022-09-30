import uv1 from './uv-index-1.svg';
import uv2 from './uv-index-2.svg';
import uv3 from './uv-index-3.svg';
import uv4 from './uv-index-4.svg';
import uv5 from './uv-index-5.svg';
import uv6 from './uv-index-6.svg';
import uv7 from './uv-index-7.svg';
import uv8 from './uv-index-8.svg';
import uv9 from './uv-index-9.svg';
import uv10 from './uv-index-10.svg';
import uv from './uv-index.svg'

const UVIndexSelector = ({value}) => {
    switch(value) {
        case (0 || 1): {
            return (
                <img src={uv1} alt="uv index 1" />
            )
        };
        case 2: {
            return (
                <img src={uv2} alt="uv index 2" />
            )
        }
        case 3: {
            return (
                <img src={uv3} alt="uv index 3" />
            )
        }
        case 4: {
            return (
                <img src={uv4} alt="uv index 4" />
            )
        }
        case 5: {
            return (
                <img src={uv5} alt="uv index 5" />
            )
        }
        case 6: {
            return (
                <img src={uv6} alt="uv index 6" />
            )
        }
        case 7: {
            return (
                <img src={uv7} alt="uv index 7" />
            )
        }
        case 8: {
            return (
                <img src={uv8} alt="uv index 8" />
            )
        }
        case 9: {
            return (
                <img src={uv9} alt="uv index 9" />
            )
        }
        case 10: {
            return (
                <img src={uv10} alt="uv index 10" />
            )
        }
        default: {
            return (
                <img src={uv} alt="uv index" />
            )
        }
    }
}
 
export default UVIndexSelector;