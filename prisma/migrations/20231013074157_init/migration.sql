-- CreateTable
CREATE TABLE "Employees" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "department_id" INTEGER NOT NULL,
    "position_id" INTEGER NOT NULL,
    CONSTRAINT "Employees_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Departments" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Employees_position_id_fkey" FOREIGN KEY ("position_id") REFERENCES "Positions" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Departments" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "parent_department_id" INTEGER,
    CONSTRAINT "Departments_parent_department_id_fkey" FOREIGN KEY ("parent_department_id") REFERENCES "Departments" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Positions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "level" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Tasks" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "assignee_id" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    CONSTRAINT "Tasks_assignee_id_fkey" FOREIGN KEY ("assignee_id") REFERENCES "Employees" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
