import './BodyContainer.css';
import CanvasContainer from '../BodyComponents/CanvasContainer/CanvasContainer.jsx';
import CodeContainer from '../BodyComponents/CodeContainer/CodeContainer.jsx';
import CustomizationContainer from '../BodyComponents/CustomizationContainer/CustomizationContainer.jsx';
import DnDContainer from '../BodyComponents/DnDContainer/DnDContainer.jsx'
import PreviewContainer from '../BodyComponents/PreviewContainer/PreviewContainer.jsx'


const BodyContainer = () => {
  return (
    <div className="bodyContainer">
      <DnDContainer />
      <CanvasContainer />
      <CustomizationContainer />
      <CodeContainer />
    </div>
  )
}

export default BodyContainer;