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
exports.getWeekSchedule = function () {
    const week = new Date();
    const dayNumber = week.getDay('December 25, 1995 23:15:30');
    const aWeekSchedule = weekSchedule[dayNumber]
    const weekScheduleString = `
    Расписание на неделю:
День: ${aWeekSchedule.dayName}

Занятия: ${aWeekSchedule.lessons.map(lesson => {
        return `\n${lesson.name} \naудитория ${lesson.auditory} \n${lesson.teacher}`;
    })}`;

    

    const dayNumber2 = week.getDay('December 26, 1995 23:15:30');
    const aWeekSchedule2 = weekSchedule[dayNumber2]
    const weekScheduleString2 = `
    Расписание на неделю:
День: ${aWeekSchedule.dayName}

Занятия: ${aWeekSchedule2.lessons.map(lesson => {
        return `\n${lesson.name} \naудитория ${lesson.auditory} \n${lesson.teacher}`;
    })}`;

    const dayNumber3 = week.getDay('December 27, 1995 23:15:30');
    const aWeekSchedule3 = weekSchedule[dayNumber3]
    const weekScheduleString3 = `
    Расписание на неделю:
День: ${aWeekSchedule3.dayName}

Занятия: ${aWeekSchedule.lessons.map(lesson => {
        return `\n${lesson.name} \naудитория ${lesson.auditory} \n${lesson.teacher}`;
    })}`;

    const dayNumber4 = week.getDay('December 28, 1995 23:15:30');
    const aWeekSchedule4 = weekSchedule[dayNumber4]
    const weekScheduleString4 = `
    Расписание на неделю:
День: ${aWeekSchedule4.dayName}

Занятия: ${aWeekSchedule.lessons.map(lesson => {
        return `\n${lesson.name} \naудитория ${lesson.auditory} \n${lesson.teacher}`;
    })}`;

    const dayNumber5 = week.getDay('December 29, 1995 23:15:30');
    const aWeekSchedule5 = weekSchedule[dayNumber5]
    const weekScheduleString5 = `
    Расписание на неделю:
День: ${aWeekSchedule5.dayName}

Занятия: ${aWeekSchedule.lessons.map(lesson => {
        return `\n${lesson.name} \naудитория ${lesson.auditory} \n${lesson.teacher}`;
    })}`;

    const dayNumber6 = week.getDay('December 30, 1995 23:15:30');
    const aWeekSchedule6 = weekSchedule[dayNumber6]
    const weekScheduleString6 = `
    Расписание на неделю:
День: ${aWeekSchedule6.dayName}

Занятия: ${aWeekSchedule.lessons.map(lesson => {
        return `\n${lesson.name} \naудитория ${lesson.auditory} \n${lesson.teacher}`;
    })}`;

    const dayNumber7 = week.getDay('December 31, 11995 23:15:30');
    const aWeekSchedule7 = weekSchedule[dayNumber7]
    const weekScheduleString7 = `
    Расписание на неделю:
День: ${aWeekSchedule7.dayName}

Занятия: ${aWeekSchedule.lessons.map(lesson => {
        return `\n${lesson.name} \naудитория ${lesson.auditory} \n${lesson.teacher}`;
    })}`;

    return  weekScheduleString2, weekScheduleString3, weekScheduleString4, weekScheduleString5, weekScheduleString6, weekScheduleString7;
    


}

exports.getTodaySchedule = function () {
    const today = new Date();
    const dayNumber = today.getDay();
    const todaySchedule = weekSchedule[dayNumber]
    console.log(todaySchedule);
    const scheduleString = `
    День: ${todaySchedule.dayName}

Занятия: ${todaySchedule.lessons.map(lesson => {
        return `\n${lesson.name} \nаудитория ${lesson.auditory} \n${lesson.teacher}`;

    })}`;

    return scheduleString;
}
