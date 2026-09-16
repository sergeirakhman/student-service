export const err_404 = (id, path) => {
    return {
        "timestamp": new Date().toISOString(),
        "status": 404,
        "error": "Not Found",
        "message": `Student with id ${id} not found`,
        "path": path
    }
}