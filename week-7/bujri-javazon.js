// ==========================================================
//     ; Title: Assignment 7.2
//     ; Author: Ngi Bujri
//     ; Date: 30 November 2022
//     ; Description: assignment demonstrating classes
// ==========================================================

// DOM ELEMENTS
const selection = document.getElementById("listing");
const btnDisplayListing = document.getElementById("btn-display-listing");

// TABLES
const productsTable = document.getElementById("products-table");
const servicesTable = document.getElementById("services-table");
const employeesTable = document.getElementById("employees-table");

// PRODUCTS TD
const tdProduct1ID = document.getElementById("product-1-id");
const tdProduct1Description = document.getElementById("product-1-description");
const tdProduct1Price = document.getElementById("product-1-price");
const tdProduct1Quantity = document.getElementById("product-1-quantity");
const tdProduct1Total = document.getElementById("product-1-total");

const tdProduct2ID = document.getElementById("product-2-id");
const tdProduct2Description = document.getElementById("product-2-description");
const tdProduct2Price = document.getElementById("product-2-price");
const tdProduct2Quantity = document.getElementById("product-2-quantity");
const tdProduct2Total = document.getElementById("product-2-total");

const tdProduct3ID = document.getElementById("product-3-id");
const tdProduct3Description = document.getElementById("product-3-description");
const tdProduct3Price = document.getElementById("product-3-price");
const tdProduct3Quantity = document.getElementById("product-3-quantity");
const tdProduct3Total = document.getElementById("product-3-total");

const tdProduct4ID = document.getElementById("product-4-id");
const tdProduct4Description = document.getElementById("product-4-description");
const tdProduct4Price = document.getElementById("product-4-price");
const tdProduct4Quantity = document.getElementById("product-4-quantity");
const tdProduct4Total = document.getElementById("product-4-total");

const tdProduct5ID = document.getElementById("product-5-id");
const tdProduct5Description = document.getElementById("product-5-description");
const tdProduct5Price = document.getElementById("product-5-price");
const tdProduct5Quantity = document.getElementById("product-5-quantity");
const tdProduct5Total = document.getElementById("product-5-total");

// SERVICES TD
const tdService1ID = document.getElementById("service-1-id");
const tdService1Description = document.getElementById("service-1-description");
const tdService1Rate = document.getElementById("service-1-rate");
const tdService1Bill = document.getElementById("service-1-bill");

const tdService2ID = document.getElementById("service-2-id");
const tdService2Description = document.getElementById("service-2-description");
const tdService2Rate = document.getElementById("service-2-rate");
const tdService2Bill = document.getElementById("service-2-bill");

const tdService3ID = document.getElementById("service-3-id");
const tdService3Description = document.getElementById("service-3-description");
const tdService3Rate = document.getElementById("service-3-rate");
const tdService3Bill = document.getElementById("service-3-bill");

// EMPLOYEES TD
const tdEmployee1ID = document.getElementById("employee-1-id");
const tdEmployee1LastName = document.getElementById("employee-1-last-name");
const tdEmployee1FirstName = document.getElementById("employee-1-first-name");
const tdEmployee1Salary = document.getElementById("employee-1-salary");

const tdEmployee2ID = document.getElementById("employee-2-id");
const tdEmployee2LastName = document.getElementById("employee-2-last-name");
const tdEmployee2FirstName = document.getElementById("employee-2-first-name");
const tdEmployee2Salary = document.getElementById("employee-2-salary");

const tdEmployee3ID = document.getElementById("employee-3-id");
const tdEmployee3LastName = document.getElementById("employee-3-last-name");
const tdEmployee3FirstName = document.getElementById("employee-3-first-name");
const tdEmployee3Salary = document.getElementById("employee-3-salary");

const tdEmployee4ID = document.getElementById("employee-4-id");
const tdEmployee4LastName = document.getElementById("employee-4-last-name");
const tdEmployee4FirstName = document.getElementById("employee-4-first-name");
const tdEmployee4Salary = document.getElementById("employee-4-salary");

const tdEmployee5ID = document.getElementById("employee-5-id");
const tdEmployee5LastName = document.getElementById("employee-5-last-name");
const tdEmployee5FirstName = document.getElementById("employee-5-first-name");
const tdEmployee5Salary = document.getElementById("employee-5-salary");

// CLASSES
class Product {
  constructor(id, description, price, quantity) {
    this.id = id;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
    this.totalValue = (quantity * price).toFixed(2);
  }
}

class Services {
  constructor(id, description, hourlyRate, min) {
    this.id = id;
    this.description = description;
    this.hourlyRate = hourlyRate.toFixed(2);
    this.min = min;
  }
}

class Employee {
  constructor(id, firstName, lastName, salary) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary.toFixed(2);
  }
}

// OBJECTS
const product1 = new Product(
  "9781118008188",
  "HTML and CSS: Design and Build Websites",
  22.26,
  10
);
const product2 = new Product(
  "9781491952023",
  "JavaScript: The Definitive Guide 7/E",
  41.33,
  7
);
const product3 = new Product(
  "9781449331818",
  "Learning JavaScript Design Patterns 1/E",
  25.99,
  3
);
const product4 = new Product(
  "9781617292422",
  "Express in Action: Writing, building, and testing Node.js applications 1/E",
  34.91,
  3
);
const product5 = new Product(
  "9781491954461",
  "MongoDB The Definitive Guide",
  33.7,
  8
);

const service1 = new Services("100", "Website Design", 150.0, 25);
const service2 = new Services("101", "DevOps Consulting", 125.0, 50);
const service3 = new Services("102", "Database Design", 125.0, 15);

const employee1 = new Employee("1007", "Ludwig", "Beethoven", 13.99);
const employee2 = new Employee("1008", "Johann", "Bah", 22.3);
const employee3 = new Employee("1009", "Wolfgang", "Mozart", 19.5);
const employee4 = new Employee("1010", "Johannes", "Brahms", 12.0);
const employee5 = new Employee("1011", "Joseph", "Haydn", 32.5);

// set td text for products
tdProduct1ID.textContent = product1.id;
tdProduct1Description.textContent = product1.description;
tdProduct1Price.textContent = product1.price;
tdProduct1Quantity.textContent = product1.quantity;
tdProduct1Total.textContent = product1.totalValue;

tdProduct2ID.textContent = product2.id;
tdProduct2Description.textContent = product2.description;
tdProduct2Price.textContent = product2.price;
tdProduct2Quantity.textContent = product2.quantity;
tdProduct2Total.textContent = product2.totalValue;

tdProduct3ID.textContent = product3.id;
tdProduct3Description.textContent = product3.description;
tdProduct3Price.textContent = product3.price;
tdProduct3Quantity.textContent = product3.quantity;
tdProduct3Total.textContent = product3.totalValue;

tdProduct4ID.textContent = product4.id;
tdProduct4Description.textContent = product4.description;
tdProduct4Price.textContent = product4.price;
tdProduct4Quantity.textContent = product4.quantity;
tdProduct4Total.textContent = product4.totalValue;

tdProduct5ID.textContent = product5.id;
tdProduct5Description.textContent = product5.description;
tdProduct5Price.textContent = product5.price;
tdProduct5Quantity.textContent = product5.quantity;
tdProduct5Total.textContent = product5.totalValue;

// set td text for services
tdService1ID.textContent = service1.id;
tdService1Description.textContent = service1.description;
tdService1Rate.textContent = service1.hourlyRate;
tdService1Bill.textContent = service1.min;

tdService2ID.textContent = service2.id;
tdService2Description.textContent = service2.description;
tdService2Rate.textContent = service2.hourlyRate;
tdService2Bill.textContent = service2.min;

tdService3ID.textContent = service3.id;
tdService3Description.textContent = service3.description;
tdService3Rate.textContent = service3.hourlyRate;
tdService3Bill.textContent = service3.min;

// set td text for employees
tdEmployee1ID.textContent = employee1.id;
tdEmployee1LastName.textContent = employee1.lastName;
tdEmployee1FirstName.textContent = employee1.firstName;
tdEmployee1Salary.textContent = employee1.salary;

tdEmployee2ID.textContent = employee2.id;
tdEmployee2LastName.textContent = employee2.lastName;
tdEmployee2FirstName.textContent = employee2.firstName;
tdEmployee2Salary.textContent = employee2.salary;

tdEmployee3ID.textContent = employee3.id;
tdEmployee3LastName.textContent = employee3.lastName;
tdEmployee3FirstName.textContent = employee3.firstName;
tdEmployee3Salary.textContent = employee3.salary;

tdEmployee4ID.textContent = employee4.id;
tdEmployee4LastName.textContent = employee4.lastName;
tdEmployee4FirstName.textContent = employee4.firstName;
tdEmployee4Salary.textContent = employee4.salary;

tdEmployee5ID.textContent = employee5.id;
tdEmployee5LastName.textContent = employee5.lastName;
tdEmployee5FirstName.textContent = employee5.firstName;
tdEmployee5Salary.textContent = employee5.salary;

// don't display tables
productsTable.style.display = "none";
servicesTable.style.display = "none";
employeesTable.style.display = "none";

btnDisplayListing.onclick = () => {
  const choice = selection.value;

  switch (choice) {
    case "select":
      productsTable.style.display = "none";
      servicesTable.style.display = "none";
      employeesTable.style.display = "none";
      break;
    case "products":
      productsTable.style.display = "block";
      servicesTable.style.display = "none";
      employeesTable.style.display = "none";
      break;
    case "services":
      productsTable.style.display = "none";
      servicesTable.style.display = "block";
      employeesTable.style.display = "none";
      break;
    case "employees":
      productsTable.style.display = "none";
      servicesTable.style.display = "none";
      employeesTable.style.display = "block";
      break;
    default:
      productsTable.style.display = "none";
      servicesTable.style.display = "none";
      employeesTable.style.display = "none";
      break;
  }
};
