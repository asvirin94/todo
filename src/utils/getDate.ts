import dayjs from 'dayjs';
import 'dayjs/locale/ru';

dayjs.locale('ru');

export const getDate = () => {
    const result = {
        day: '',
        digit: 0,
        month: '',
        year: 0
    }
    const currentDate = dayjs()
    
    result.day =  currentDate.format('dddd')
    result.digit = currentDate.date()
    result.month = currentDate.format('MMMM')
    result.year = currentDate.year()

    return result
}