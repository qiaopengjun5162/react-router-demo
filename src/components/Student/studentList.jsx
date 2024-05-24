import React from 'react'
import { useGetStudentsQuery } from '../../store/api/studentApi'
import Student from './Student'
import StudentForm from './StudentForm'
import classes from "./StudentList.module.css"

const StudentList = (props) => {
    const { data: students, isSuccess, isLoading, isError } = useGetStudentsQuery()
    console.log(students);
    return (
        <table className={classes.table}>
            <caption className={classes.title}>学生列表</caption>
            <thead>
                <tr>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>年龄</th>
                    <th>地址</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                {/* {props.students.map((student) => <Student key={student.id} student={student} />)} */}

                {isLoading && <p>Loading...</p>}
                {isSuccess && students.map((student) => <Student key={student.id} student={student} />)}

                {isError && <p>Error...</p>}
            </tbody>


            <tfoot>
                <StudentForm />
            </tfoot>
        </table>
    )
}

export default StudentList
