const weekSchedule = [
    {
        dayName: 'Sunday',
        lessons: []
    },
    {
        dayName: 'Monday',
        lessons: [
            {
                name: 'Math',
                auditory: 212,
                teacher: 'Dan Abramov'
            },
            {
                name: 'Geometry',
                auditory: 212,
                teacher: 'Dan Abramov'
            }
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
                teacher: 'Samara Isaevna'
            }
        ]
    },
    {
        dayName: 'Wednesday',
        lessons: [
            {
                name: 'Web development',
                auditory: 102,
                teacher: 'Dean Azimbaev'
            }
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
                name: 'Web development',
                auditory: 102,
                teacher: 'Dean Azimbaev'
            }
        ]
    },
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
