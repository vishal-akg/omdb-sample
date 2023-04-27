import { useForm, Controller } from "react-hook-form";
import { Button, Container, Grid, Stack, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import client from "./http-client";
import { useDispatch, useSelector } from "react-redux";
import { SET_RESULTS } from "./store/slices/searchSlice";

function App() {
  const dispatch = useDispatch();
  const { results } = useSelector((state) => state.search);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      year: "",
      plot: "",
    },
  });

  const onSubmit = async ({ title, year, plot }) => {
    const params = {
      t: !!title ? title : undefined,
      y: !!year ? year : undefined,
      plot: !!plot ? plot : undefined,
    };
    try {
      const res = await client.get("/", { params });
      if (res.status === 200) {
        if (res.data.Error) {
        } else {
          dispatch(SET_RESULTS({ results: res.data }));
        }
      }
    } catch (error) {}
  };

  console.log(results);

  return (
    <Stack
      sx={{ height: "100vh" }}
      justifyContent={"center"}
      alignItems={"cente"}
    >
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container alignItems={"stretch"} spacing={3}>
            <Grid item md={6}>
              <Controller
                name={"title"}
                control={control}
                render={({ field }) => {
                  return (
                    <TextField
                      {...field}
                      fullWidth
                      size={"small"}
                      label={"Title"}
                      variant={"outlined"}
                    />
                  );
                }}
              />
            </Grid>
            <Grid item md={2}>
              <Controller
                name={"year"}
                control={control}
                render={({ field }) => {
                  return (
                    <TextField
                      {...field}
                      size={"small"}
                      label={"Year"}
                      fullWidth
                      variant={"outlined"}
                      type={"number"}
                    />
                  );
                }}
              />
            </Grid>
            <Grid item md={2}>
              <Controller
                name={"plot"}
                control={control}
                render={({ field }) => {
                  return (
                    <TextField
                      {...field}
                      fullWidth
                      size={"small"}
                      label={"Plot"}
                      variant={"outlined"}
                    />
                  );
                }}
              />
            </Grid>
            <Grid item>
              <Button
                type={"submit"}
                variant={"contained"}
                startIcon={<Search />}
                disableElevation
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </form>
        <div>{JSON.stringify(results)}</div>
      </Container>
    </Stack>
  );
}

export default App;
