const weekSchedule = [
    {
        dayName: 'Sunday',
        lessons: [
            {
                name: 'Нет расписания, нет уроков ! =)',
                auditory: ' ',
                teacher: ' '
               
            },
        ]
    },
    {
        dayName: 'Monday',
        lessons: [
            {
                name: 'Нет расписания, нет уроков ! =)',
                auditory: ' ',
                teacher: ' '
               
            },
        ]
    },
    {
        dayName: 'Tuesday',
        lessons: [
            {
                name: 'Web development',
                auditory: 102,
                teacher: 'Dean Azimbaev'
            },
            
        ]
    },
    {
        dayName: 'Wednesday',
        lessons: [
            {
                name: 'Нет расписания, нет уроков ! =)',
                auditory: ' ',
                teacher: ' '
               
            },
        ]
    },
    {
        dayName: 'Thursday',
        lessons: [
            {
                name: 'Web development',
                auditory: 102,
                teacher: 'Dean Azimbaev'
            }
        ]
    },
    {
        dayName: 'Friday',
        lessons: [
            {
                name: 'Нет расписания, нет уроков ! =)',
                auditory: ' ',
                teacher: ' '
                
               
            },
        ]
    },
    {
        dayName: 'Saturday',
        lessons: [
            {
                name: 'Web development',
                auditory: 102,
                teacher: 'Dean Azimbaev'
            },
        ]
    }
    
];
exports.getWeekSchedule = function() {
    const weekSchedule = `
    День: вся неделя

Занятия:
    ${todaySchedule.lessons.map(lesson => {
        return `\n${lesson.name} \nаудитория ${lesson.auditory} \n${lesson.teacher}`;


        
    })}`;

    return weekSchedule;
}

exports.getTodaySchedule = function() {
    const today = new Date();
    const dayNumber = today.getDay();

    const todaySchedule = weekSchedule[dayNumber]

    console.log(todaySchedule);

    const scheduleString = `
    День: ${todaySchedule.dayName}

Занятия:
    ${todaySchedule.lessons.map(lesson => {
        return `\n${lesson.name} \nаудитория ${lesson.auditory} \n${lesson.teacher}`;

    })}`;

    return scheduleString;
}
