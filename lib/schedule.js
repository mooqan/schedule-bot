const weekSchedule = [
    {
        dayName: 'Sunday',
        lessons: [
            {
                classes: 'Нет расписания, нет уроков ! =)',
               
            },
        ]
    },
    {
        dayName: 'Monday',
        lessons: [
            {
                classes: 'Нет расписания, нет уроков ! =)',
               
            },
        ]
    },
    {
        dayName: 'Tuesday',
        lessons: [
            {
                name: 'Physics',
                auditory: 102,
                teacher: 'Dean Azimbaev'
            },
            {
                name: 'English',
                auditory: 512,
                teacher: 'Samara Isaevna',
                classes: 'Нет расписания, нет уроков! =)'
            }
        ]
    },
    {
        dayName: 'Wednesday',
        lessons: [
            {
                classes: 'Нет расписания, нет уроков ! =)',
               
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
                classes: 'Нет расписания, нет уроков ! =)'
               
            },
        ]
    },
    {
        dayName: 'Saturday',
        lessons: [
            {
                classes: 'Нет расписания, нет уроков! =)'
            },
        ]
    }
    
];

exports.getTodaySchedule = function() {
    const today = new Date();
    const dayNumber = today.getDay();

    const todaySchedule = weekSchedule[dayNumber]

    console.log(todaySchedule);

    const scheduleString = `
    День: ${todaySchedule.dayName}

Занятия:
    ${todaySchedule.lessons.map(lesson => {
        return `\n${lesson.name}, аудитория ${lesson.auditory}, ${lesson.teacher}`;
    })}`;

    return scheduleString;
}
