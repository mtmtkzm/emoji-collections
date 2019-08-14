<template>
  <ElUpload
    action=""
    list-type="picture-card"
    :auto-upload="false"
    :on-change="handleChange"
  >
    <span slot="default" class="el-icon-plus"></span>

    <div slot="file" slot-scope="{ file }">
      <img class="el-upload-list__item-thumbnail" :src="file.url" />
      <span class="el-upload-list__item-delete" @click="handleRemove(file)">
        <span class="el-icon-delete"></span>
      </span>
    </div>
  </ElUpload>
</template>

<script>
import firebase from '~/plugins/firebase'

export default {
  methods: {
    handleRemove: console.log,
    handleChange: function(file) {
      this.upload(file.raw)
    },
    upload: function(file) {
      console.log(file)

      firebase
        .storage()
        .ref()
        .child(`images/${file.name}`)
        .put(file)
        .then(console.log)
    }
    // async getUrl(bucketPath) {
    //   let url = ''
    //   await firebase
    //     .storage()
    //     .ref()
    //     .child(bucketPath)
    //     .getDownloadURL()
    //     .then(res => {
    //       url = res
    //     })
    //
    //   return url
    // }
  }
}
</script>
