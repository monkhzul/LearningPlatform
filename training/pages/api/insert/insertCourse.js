import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export default async function insert(req, res) {
  const name = req.body.name;
  const type = req.body.type;
  const duration = req.body.duration;
  const courseLevel = req.body.courseLevel;
  const trainingType = req.body.trainingType;
  const sessionDates = req.body.sessionDates;
  const fileName = req.body.fileName;
  const filePath = req.body.filePath;
  const startDate = req.body.startDate;
  const sysDate = req.body.sysDate;

  const data = await prisma.$queryRaw`INSERT INTO [dbo].[Course]
  ([name],[type],[duration],[courseLevel],[trainingType],[sessionDates]
  ,[fileName],[filePath],[startDate],[sysDate])
    VALUES (${name},${type}, ${duration}, ${courseLevel}, ${trainingType}, 
    ${sessionDates}, ${fileName}, ${filePath}, ${startDate}, ${sysDate})`
  res.status(200).json(data)
}
