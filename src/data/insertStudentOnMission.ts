import { connection } from ".."

export const insertStudentOnMission = async (mission_id: string, id: string): Promise<any> => {
    try {
        await connection.raw(`
            UPDATE Student
            SET mission_id = ${mission_id}
            WHERE id = ${id}
        `)
    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }
}