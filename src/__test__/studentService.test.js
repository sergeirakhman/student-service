/*
The Arrange, Act, Assert (AAA)
 */

import {jest, beforeEach, describe, it, expect} from "@jest/globals"

const mockRepo = {
    createStudent: jest.fn(),
    findStudentById: jest.fn(),
    removeStudent: jest.fn(),
    updateStudent: jest.fn(),
    findStudentsByName: jest.fn(),
    countStudentsByNames: jest.fn(),
    findStudentsByMinScore: jest.fn(),
};

jest.unstable_mockModule("../repository/studentRepository.js", () => mockRepo)

const studentService = await import("../service/studentService.js");

beforeEach(() => {
    jest.clearAllMocks();
})

describe("Student Service", () => {

    it("AddStudent return false if student exists", async () => {
        //Arrange
        mockRepo.findStudentById.mockResolvedValue({id: 1});
        //Act
        const result = await studentService.addStudent({id: 1, name: "John", password: "secret"});
        //Assert
        expect(result).toBeFalsy();
        expect(mockRepo.createStudent).not.toHaveBeenCalled();
        expect(mockRepo.findStudentById).toHaveBeenCalledWith(1);
    })
    it("AddStudent return true if student does not exists", async () => {
        //Arrange
        mockRepo.findStudentById.mockResolvedValue(null);
        //Act
        const result = await studentService.addStudent({id: 2, name: "John", password: "secret"});
        //Assert
        expect(result).toBeTruthy();
        expect(mockRepo.createStudent).toHaveBeenCalledWith({_id: 2, name: "John", password: "secret"});
        expect(mockRepo.findStudentById).toHaveBeenCalledWith(2);
    })

    it("findStudent return null if student does not exists", async () => {
        //Arrange
        mockRepo.findStudentById.mockResolvedValue(null);
        //Act
        const result = await studentService.findStudent({id: 1});
        //Assert
        expect(result).toBeNull();
    })
    it("findStudent return student if student exists", async () => {
        //Arrange
        mockRepo.findStudentById.mockResolvedValue({id: 2, name: "John"});
        //Act
        const result = await studentService.findStudent({id: 2});
        //Assert
        expect(result).toEqual({id: 2, name: "John"});
    })

    it("removeStudent return null if student does not exists", async () => {
        //Arrange
        mockRepo.removeStudent.mockResolvedValue(null);
        //Act
        const result = await studentService.removeStudent({id: 1});
        //Assert
        expect(result).toBeNull();
    })
    it("removeStudent return student if student exists", async () => {
        //Arrange
        mockRepo.removeStudent.mockResolvedValue({id: 2, name: "John"});
        //Act
        const result = await studentService.removeStudent({id: 2});
        //Assert
        expect(result).toEqual({id: 2, name: "John"});
    })
})