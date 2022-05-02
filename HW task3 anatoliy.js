const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
  ]

/////// 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.

// enterprises.forEach (function(item) {
//     const amount = item.departments.reduce((total, item) => total + item.employees_count, 0);     
//        if (amount === 0) {
//         console.log (`${item.name} (нет сотрудников)`)
//        } else {
//             console.log (`${item.name} (${amount} сотрудников)`);
//        }
//     item.departments.forEach (function(item) {
//         if (item.employees_count === 0) {
//             console.log (`${item.name} (нет сотрудников)`)
//            } else {
//                 console.log (`${item.name} (${(item.employees_count)} сотрудников)`);
//            }
//     });

///////  2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).

// const getEnterpriseNameet = function (id) {
//   enterprises.forEach(function(enterprise) {
//     enterprise.departments.forEach(function(department) {
//       if (department.id === id || department.name === id) {
//         console.log(enterprise.name); 
//       }
   
//     });
//   });
// };
// getEnterpriseNameet('Отдел тестирования');




//////// 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия

// let addEnterprise = function(item) {
//   let enterprise = {
//     name: item
//   };
//   enterprises.push(enterprise);
// }

// addEnterprise('Предприятие 4')
// console.log(enterprises)

//////// 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.


// let addDepartment = function(id, department) {
//   enterprises.forEach(function(enterprise) {
//     if (enterprise.id === id) {
//       let depart = {
//         name: department
//       };
//     enterprise.departments.push(depart);
//     }
//   });
// };
  
// addDepartment(1, 'отдел продаж')
// console.log(enterprises)


//////////  5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.



// let editEnterprise = function(id, newEnterprise) {
//   enterprises.forEach(function(enterprise) {
//     if (enterprise.id === id) {
//       enterprise.name = newEnterprise
//     };
//   });
// };
  
// editEnterprise(1, 'отдел аналитики')
// console.log(enterprises)


////////// 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.

// const editDepartment = function(id,newDepartment) {
//   enterprises.forEach(function(enterprise) {
//     enterprise.departments.forEach(function(department) {
//       if (department.id === id) {
//         department.name = newDepartment
//       };
//     });
//   });
// };
// editDepartment(7, "Новое название отдела")

// enterprises.forEach(item => console.log(item.name));
// enterprises.forEach(item => console.log(item.departments.forEach(item => console.log(item.name))));


//////// 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

// const deleteEnterprise = function(id) {
//   enterprises.forEach(function(enterprise, i) {
//     if (enterprise.id === id) {
//     enterprises.splice(i,1);
//     }
//   })
// }

// deleteEnterprise(1)
// console.log(enterprises);

//////8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.

// const deleteDepartment = function(id) {
//   enterprises.forEach(function(enterprise) {

//     enterprise.departments.forEach(function(department,i) {
//       if (department.id === id && department.employees_count === 0) {
//         enterprise.departments.splice(i,1);
//       }
//     });
//     console.log(enterprise.departments)
//   });
// };
// deleteDepartment(10);



////// 9. Написать функцию для переноса сотрудников между отделами одного предприятия. 
////В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).


// const moveEmployees = function(idOut, idIn) {
//   let newNumbOfEmployees = 0;
//   enterprises.forEach(function(enterprise) {
//     enterprise.departments.forEach(function(department) {
//       if (department.id === idOut) {
//         newNumbOfEmployees += department.employees_count;
//         department.employees_count = 0;
//       }
//     });
//   });
//   enterprises.forEach(function(enterprise) {
//     enterprise.departments.forEach(function(department) {
//      if (department.id === idIn) {
//         department.employees_count += newNumbOfEmployees;
//       }
      
//     });
//     console.log(enterprise.departments)
//   });
// };
// moveEmployees(2, 3)



