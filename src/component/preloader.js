import Spinner from 'react-bootstrap/Spinner';
import s from '../component/preloader.module.css'
function Spin() {
  return (
    <Spinner className={s.spinner} animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default Spin;