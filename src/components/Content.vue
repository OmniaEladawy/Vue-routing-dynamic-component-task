<template>
    <table class="table table-primary table-striped text-center">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">City</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="student in students" :key="student.id">
      <td>{{student.id}}</td>
      <td>{{student.name}}</td>
      <td>{{student.city}}</td>
      <td>
        <svg @click="fillProperties(student)" data-bs-toggle="modal" data-bs-target="#exampleModal1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="blue" class="bi bi-pencil-square" viewBox="0 0 16 16">
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
          <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
        </svg> | 
        <svg @click="deleteStudent(student.id)" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-trash" viewBox="0 0 16 16">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
          <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
        </svg>
         <!--modal-->
<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form action="#" class="my-3">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label title text-left" >ID</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" v-model="stdId" placeholder="enter id" disabled >
            </div>

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label title text-left">Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" v-model="stdName" placeholder="enter name"  >
            </div>

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label title text-left">City</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" v-model="stdCity" placeholder="enter city" >
            </div>
            
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="updateStudent" data-bs-dismiss="modal">Save changes</button>
      </div>
    </div>
  </div>
</div>
      </td>
     
    </tr>
    
  </tbody>
  <tfoot>
      <tr>
          <th colspan="4">Total number of students {{students.length}} </th>
      </tr>
  </tfoot>
</table>


<AddComponent @addStudent="addStudent"/>


</template>

<script>
    
    import AddComponent from './AddComponent.vue';
    export default {
        data:()=>({
            students: [],
            stdId: '',
            stdName: '',
            stdCity: ''
        }),
        async created(){
          const allStudents = await fetch("http://localhost:5000/students");
          this.students = await allStudents.json();
        },
        components:{
          AddComponent
        },
        methods:{
            async addStudent(data){
                if(!this.checkexist(data)){
                  await fetch("http://localhost:5000/students",{
                    method: "POST",
                    headers: {
                      "Content-Type":"application/json"
                    },
                    body: JSON.stringify(data)
                });
                  this.students.push(data);
                }
            },
            checkexist(student){
                    return this.students.some(std => std.id == student.id)
            },
            fillProperties(student){
              this.stdId = student.id;
              this.stdName = student.name;
              this.stdCity = student.city;
            },
            async updateStudent(){
              let updatedObject = {id: this.stdId , name: this.stdName , city: this.stdCity } ;
              if(confirm('are you sure ?')){
              await fetch(`http://localhost:5000/students/${this.stdId}`,{
                    method: "PUT",
                    headers: {
                      "Content-Type":"application/json"
                    },
                    body: JSON.stringify(updatedObject)
                });
                this.students.find(std => std.id == this.stdId).name = this.stdName;
                this.students.find(std => std.id == this.stdId).city = this.stdCity;
              }
            },
            async deleteStudent(_id){
              if(confirm('are you sure ?')){
              await fetch(`http://localhost:5000/students/${_id}`,{
                    method: "DELETE",
                    
                });
                  
                this.students = this.students.filter(std => std.id != _id);
              }
            },



















            
        }
    }
</script>

<style>
  svg{
    cursor: pointer;
  }
</style>


