import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface Post {
  postTitle: string;
  postPersonImage: any;
  postImage: any;
  likes: number;
  isLiked: boolean;
}

interface Props {
  data: Post;
}

const PostItem = ({data}: Props) => {
  const {postTitle, postPersonImage, postImage, isLiked} = data;
  const [like, setLike] = useState(isLiked);

  const handleClickLike = () => {
    setLike(prev => !prev);
  };

  return (
    <View style={styles.container}>
      {/** Post Header */}
      <View style={styles.postHeader}>
        <View style={styles.postHeaderProfile}>
          <Image
            source={postPersonImage}
            alt={postTitle}
            style={styles.profileImage}
          />
          <Text>{postTitle}</Text>
        </View>
        <Feather name="more-vertical" style={styles.moreButton} />
      </View>

      {/** Post Image */}
      <View style={styles.postImageContainer}>
        <Image source={postImage} style={styles.postImage} />
      </View>

      {/** Post Action */}
      <View style={styles.postAction}>
        <View style={styles.action}>
          <TouchableOpacity onPress={handleClickLike}>
            <AntDesign
              name={like ? 'heart' : 'hearto'}
              style={[styles.actionIcon, like && styles.heart]}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="chatbubble-outline" style={styles.actionIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="navigation" style={styles.actionIcon} />
          </TouchableOpacity>
        </View>
        <Feather name="bookmark" style={styles.actionIcon} />
      </View>

      {/** Post Comment */}
      <View style={styles.postComment}>
        <Text>좋아요 {like ? data.likes + 1 : data.likes} 개</Text>
        <Text style={styles.postText}>게시물 설명</Text>
        <Text style={styles.moreComment}>댓글 모두 보기</Text>
        <View style={styles.commentContainer}>
          <View style={styles.commentInputContainer}>
            <Image source={postPersonImage} style={styles.postProfileImage} />
            <TextInput placeholder="댓글 달기 ..." style={styles.input} />
          </View>
          <View style={styles.submitCommentContainer}>
            <Text style={styles.submitComment}>게시</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingBottom: 10,
  },
  postHeader: {
    width: '100%',
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 10,
  },
  postHeaderProfile: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginRight: 15,
  },
  moreButton: {
    fontSize: 20,
  },
  postImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  postImage: {
    width: '100%',
    height: 400,
  },
  postAction: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  action: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  actionIcon: {
    fontSize: 20,
  },
  heart: {
    color: 'red',
  },
  postComment: {
    paddingHorizontal: 10,
  },
  postText: {
    paddingVertical: 4,
  },
  moreComment: {
    opacity: 0.4,
    paddingVertical: 2,
    marginTop: 5,
    marginBottom: 5,
  },
  commentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postProfileImage: {
    width: 25,
    height: 25,
    borderRadius: 100,
    backgroundColor: 'orange',
    marginRight: 10,
  },
  input: {
    opacity: 0.5,
  },
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  submitCommentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  submitComment: {
    color: '#0095f6',
  },
});
