<template>
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary d-block m-auto fw-bold" style="width: 150px;" data-bs-toggle="modal" data-bs-target="#exampleModal" >
  Add
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form action="#" class="my-3">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label title">ID</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="enter id" v-model="stdId" >
            </div>

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label title">Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="enter name" v-model="stdName" >
            </div>

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label title">City</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="enter city" v-model="stdCity" >
            </div>
            
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="raiseEvent" data-bs-dismiss="modal">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        data(){
            return {
                stdId: '',
                stdName: '',
                stdCity: ''
            }
        },
        methods:{
            raiseEvent(){
                let newStudent = {
                id: this.stdId,
                name: this.stdName,
                city: this.stdCity
            };
            this.$emit("addStudent",newStudent);
            }
        }
    }
</script>