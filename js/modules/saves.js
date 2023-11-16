/**
 * Get Datas
 * @param key 
 */
function getData(key) {
    return JSON.parse(localStorage.getItem(key)) ?? []
}

/**
 * Save data
 * @param {String} key 
 * @param {Object} data 
 */
function saveData(key, data) {
    // Get Previous and Push
    const old = getData(`${key}`)    
    console.log('old :>> ', old);
    // On ajoute le nouveau user à la liste existante
    old.push(data)
    // Convert data
    const convertData = JSON.stringify(old)
    // Save it
    localStorage.setItem(key, convertData)
}

/**
 * 
 * @param {string} key 
 * @returns 
 */
// function saveUsersId (key) {
//     console.log('je suis dans la fonction saveUser:>> ');
//     let old = JSON.parse(localStorage.getItem(key)) ?? []
//     console.log(old)
//     old.push()
//     const convertData = JSON.stringify(old)
//     localStorage.setItem(key, convertData)
// }
// Export to
export { getData, saveData }