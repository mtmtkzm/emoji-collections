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
    async upload(file) {
      const { lastModified, name, size, type, uid } = file
      const url = await this.getUrl(file)

      firebase
        .firestore()
        .collection('emojis')
        .add([
          {
            lastModified,
            name,
            size,
            type,
            uid,
            url
          }
        ])

      firebase
        .firestore()
        .collection('emojis')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            console.log(doc.data())
          })
        })
    },
    async getUrl(file) {
      const bucketPath = `emojis/${file.name}`
      const uploadedUrl = await firebase
        .storage()
        .ref()
        .child(bucketPath)
        .put(file)
        .then(async () => {
          const url = await firebase
            .storage()
            .ref()
            .child(bucketPath)
            .getDownloadURL()
            .then(url => url)

          return url
        })

      return uploadedUrl
    }
  }
}
</script>
