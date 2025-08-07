}}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      <h3 className="text-center">Product List</h3>
      <table className="table table-bordered table-striped mt-3">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>OS</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.os}</td>
              <td>{p.price}</td>
              <td className="actions-cell">
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => editProduct(p)}
                >
                  Edit
                </button>
                
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteProduct(p.id)}
                >
                  Delete
                </button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
