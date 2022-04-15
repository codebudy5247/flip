import { useState, useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
// @mui
import {
  Box,
  Link,
  Card,
  Stack,
  Paper,
  Checkbox,
  TextField,
  Typography,
  CardHeader,
  IconButton,
  AvatarGroup,
  InputAdornment,
  FormControlLabel,
} from "@mui/material";
import Iconify from "./Iconify";
import MyAvatar from "./MyAvatar";
import Avatar from "./Avatar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 300, // phone
      sm: 600, // tablets
      md: 900, // small laptop
      lg: 1200, // desktop
      xl: 1536, // large screens
    },
  },
});
const Post = (props: any) => {
  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{ width: ["90%", "50%", "50%", "50%", "50%"], marginBottom: 5,mt:2 }}
      >
        <CardHeader
          disableTypography
          avatar={
            <Avatar
              alt={props?.post?.user?.Name}
              src={props?.post?.user?.avatar}
            />
          }
          title={
            <Link
              to="#"
              variant="subtitle2"
              color="text.primary"
              component={RouterLink}
            >
              {props?.post?.user?.Name}
            </Link>
          }
          subheader={
            <Typography
              variant="caption"
              sx={{ display: "block", color: "text.secondary" }}
            >
              {props?.post?.createdAt}
            </Typography>
          }
          action={
            <IconButton>
              <Iconify icon={"eva:more-vertical-fill"} width={20} height={20} />
            </IconButton>
          }
        />

        <Stack spacing={3} sx={{ p: 3 }}>
          <Typography>{props?.post?.postBody}</Typography>

          {/* <Image alt="post media" src={props?.post?.images} ratio="16/9" sx={{ borderRadius: 1 }} /> */}
          {/* <img
            src={props?.post.images}
            alt="avatar"
            width="90%"
            height="90%"
          ></img> */}

          {/* <Stack direction="row" alignItems="center">
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                color="error"
                checked={isLiked}
                icon={<Iconify icon={'eva:heart-fill'} />}
                checkedIcon={<Iconify icon={'eva:heart-fill'} />}
                onChange={isLiked ? handleUnlike : handleLike}
              />
            }
            label={fShortenNumber(likes)}
            sx={{ minWidth: 72, mr: 0 }}
          />
          <AvatarGroup max={4} sx={{ '& .MuiAvatar-root': { width: 32, height: 32 } }}>
            {post.personLikes.map((person) => (
              <Avatar key={person.name} alt={person.name} src={person.avatarUrl} />
            ))}
          </AvatarGroup>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton onClick={handleClickComment}>
            <Iconify icon={'eva:message-square-fill'} width={20} height={20} />
          </IconButton>
          <IconButton>
            <Iconify icon={'eva:share-fill'} width={20} height={20} />
          </IconButton>
        </Stack> */}

          {/* {hasComments && (
          <Stack spacing={1.5}>
            {post.comments.map((comment) => (
              <Stack key={comment.id} direction="row" spacing={2}>
                <Avatar alt={comment.author.name} src={comment.author.avatarUrl} />
                <Paper sx={{ p: 1.5, flexGrow: 1, bgcolor: 'background.neutral' }}>
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    alignItems={{ sm: 'center' }}
                    justifyContent="space-between"
                    sx={{ mb: 0.5 }}
                  >
                    <Typography variant="subtitle2">{comment.author.name}</Typography>
                    <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                      {fDate(comment.createdAt)}
                    </Typography>
                  </Stack>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {comment.message}
                  </Typography>
                </Paper>
              </Stack>
            ))}
          </Stack>
        )} */}

          {/* <Stack direction="row" alignItems="center">
          <MyAvatar />
          <TextField
            fullWidth
            size="small"
            value={message}
            inputRef={commentInputRef}
            placeholder="Write a comment…"
            onChange={(event) => handleChangeMessage(event.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton size="small" onClick={handleClickAttach}>
                    <Iconify icon={'ic:round-add-photo-alternate'} width={24} height={24} />
                  </IconButton>
                  <EmojiPicker alignRight value={message} setValue={setMessage} />
                </InputAdornment>
              ),
            }}
            sx={{
              ml: 2,
              mr: 1,
              '& fieldset': {
                borderWidth: `1px !important`,
                borderColor: (theme) => `${theme.palette.grey[500_32]} !important`,
              },
            }}
          />
          <IconButton>
            <Iconify icon={'ic:round-send'} width={24} height={24} />
          </IconButton>
          <input type="file" ref={fileInputRef} style={{ display: 'none' }} />
        </Stack> */}
        </Stack>
      </Card>
    </ThemeProvider>
  );
};

export default Post;
