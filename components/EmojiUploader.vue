<template>
  <div class="EmojiUploader">
    <ElDialog :visible.sync="isOpenDialog" width="100%">
      <div class="dialog__inner">
        <div class="uploader">
          <ElUpload
            action=""
            drag
            multiple
            :auto-upload="false"
            :on-change="handleChange"
            list-type="picture"
          >
            <div class="uploader__body">
              <span class="el-icon-upload2"></span>
              <p>Drop Emojis here</p>
            </div>
          </ElUpload>
        </div>
        <div class="upload-flow">
          <div>
            <ElSteps
              direction="vertical"
              :space="100"
              :active="9"
              finish-status="process"
            >
              <ElStep
                title="Select Emoji"
                description="Drop Emojis or Click to open  file dialog."
              />
              <ElStep
                title="Upload"
                description="でもいまは選択された時点でアップロードしてる"
              />
            </ElSteps>
          </div>
        </div>
      </div>
    </ElDialog>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'

export default {
  data() {
    return {
      isOpenDialog: false
    }
  },
  methods: {
    openDialog: function() {
      this.isOpenDialog = true
    },
    closeDialog: function() {
      this.isOpenDialog = true
    },
    handleChange: function(file) {
      this.upload(file.raw)
    },
    async upload(file) {
      const userId = this.$store.state.user.id

      const fileId = String(file.uid)

      const fileData = {
        id: fileId,
        data: {
          lastModified: file.lastModified,
          name: file.name,
          size: file.size,
          type: file.type,
          url: await this.getUrl(file)
        }
      }

      // ユーザ情報内にEmojiをいれる
      firebase
        .firestore()
        .collection('users')
        .doc(userId)
        .collection('emojis')
        .doc()
        .set(fileData)
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

<style scoped>
.EmojiUploader {
  width: 70%;
}

.dialog__inner {
  display: flex;
}

.uploader {
  width: 360px;

  &__body {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
    }
    p {
      margin-top: 10px;
    }
  }
}

.upload-flow {
  flex: 1;
  margin-left: 40px;
}
</style>
