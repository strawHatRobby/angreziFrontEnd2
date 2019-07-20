
import BotQuestion from '../components/chatQuestions/BotQuestions';
import BotView from '../components/chat/BotView';
import Quotes from '../components/chat/Quotes';
import Definition from '../components/chatQuestions/Definition';
import Sentence from '../components/chatQuestions/Sentence';
import { addQuoteToScreen, addToScreen, incrementProgressBar , showExampleType, getQuote} from '../components/chat/redux/chatScreenActions';
export const startConvo = () => {
    this.props.addToScreen({type:'bot', data:'Hey Yasharth'})
}