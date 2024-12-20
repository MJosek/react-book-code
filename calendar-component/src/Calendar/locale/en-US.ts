import { CalendarLocale } from "./interface";

const calendarLocale: CalendarLocale = {
    en:{
        formatYear: 'YYYY',
        formatMonth: 'MMM YYYY',
        today: 'Today',
        month: {
            January: 'January',
            February: 'February',
            March: 'March',
            April: 'April',
            May: 'May',
            June: 'June',
            July: 'July',
            August: 'August',
            September: 'September',
            October: 'October',
            November: 'November',
            December: 'December',
        },
        week: {
            monday: 'Monday',
            tuesday: 'Tuesday',
            wednesday: 'Wednesday',
            thursday: 'Thursday',
            friday: 'Friday',
            saturday: 'Saturday',
            sunday: 'Sunday',
        },
    },
    zh:{
        formatYear: 'YYYY 年',
        formatMonth: 'YYYY 年 MM 月',
        today: '今天',
        month: {
            January: '一月',
            February: '二月',
            March: '三月',
            April: '四月',
            May: '五月',
            June: '六月',
            July: '七月',
            August: '八月',
            September: '九月',
            October: '十月',
            November: '十一月',
            December: '十二月',
        },
        week: {
            monday: '周一',
            tuesday: '周二',
            wednesday: '周三',
            thursday: '周四',
            friday: '周五',
            saturday: '周六',
            sunday: '周日',
        }
    }
}

export default calendarLocale;